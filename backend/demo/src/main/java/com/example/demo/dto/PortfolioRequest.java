package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;
public class PortfolioRequest {
    private String asset;
    private int quantity;
    private double value;

    // Getters & Setters
}