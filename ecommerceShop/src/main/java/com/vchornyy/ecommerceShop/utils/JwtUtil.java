package com.vchornyy.ecommerceShop.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.lang.Function;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    public static final String SECRET_KEY = "eyJhbGciOiJIUzI1NiJ9AeyJzdWIiOiJmb28iLCJleHAiOjE2NTAwMDIyOTEsImlhdCI6MTY0OTk2NjI5MX0PtzfB0Wy9Dp3Y9pl-5_Oc4gwPClOHlIjE8kHUcgvKhUs";
    public String generateToken(String userName){
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims,userName);
    }

    public String createToken(Map<String, Object> claims, String userName){
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 600 * 300))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);

    }

    public String extractUsername (String token){
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim (String token, Function <Claims, T> claimsResolver) {
       final Claims claims = extractAllClaims(token);
       return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims (String token) {
        return Jwts.parser().setSigningKey(getSignKey()).build()
                .parseClaimsJws(token)
                .getBody();

    }

    public Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public Boolean validateToken (String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }


}
