package com.vchornyy.ecommerceShop.services.auth;

import com.vchornyy.ecommerceShop.dto.SignupRequest;
import com.vchornyy.ecommerceShop.dto.UserDto;

public interface AuthService {
    public UserDto createUser (SignupRequest signupRequest);
    public Boolean hasUserWithEmail(String email);
    public void createAdminAccount();

}
