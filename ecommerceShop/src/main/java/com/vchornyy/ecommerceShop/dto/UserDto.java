package com.vchornyy.ecommerceShop.dto;

import com.vchornyy.ecommerceShop.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private UserRole userRole;


}
