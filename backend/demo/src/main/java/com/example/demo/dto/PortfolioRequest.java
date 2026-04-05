package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;
public class PortfolioRequest {
    private String asset;
    private int quantity;
    private double value;

    // Getters & Setters
    public String getAsset() {
        return asset;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getValue() {
        return value;
    }
    public void setAsset(String asset) {
        this.asset = asset;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setValue(double value) {
        this.value = value;
    }
}