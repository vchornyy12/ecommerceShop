package com.vchornyy.ecommerceShop.repository;

import com.vchornyy.ecommerceShop.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
