package com.vchornyy.ecommerceShop.entity;

import com.vchornyy.ecommerceShop.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String name;

    private UserRole role;

    @Lob
    @Column(length = 1000000)
    private byte[] img;


}
