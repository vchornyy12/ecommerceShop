package com.vchornyy.ecommerceShop.repository;

import com.vchornyy.ecommerceShop.entity.User;
import com.vchornyy.ecommerceShop.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);

    User findByRole (UserRole userRole);
}
