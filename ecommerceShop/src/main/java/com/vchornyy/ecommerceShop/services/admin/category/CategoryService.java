package com.vchornyy.ecommerceShop.services.admin.category;

import com.vchornyy.ecommerceShop.dto.CategoryDto;
import com.vchornyy.ecommerceShop.entity.Category;

import java.util.List;

public interface CategoryService {

    Category createCategory(CategoryDto categoryDto);
    public List<Category> getAllCategories();

}
