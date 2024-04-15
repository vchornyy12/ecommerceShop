package com.vchornyy.ecommerceShop.repository;

import com.vchornyy.ecommerceShop.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long > {

}
