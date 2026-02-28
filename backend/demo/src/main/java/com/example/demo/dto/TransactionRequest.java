package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

public record TransactionRequest(

        @NotNull
        Long userId,

        @NotNull
        @PositiveOrZero
        BigDecimal amount,

        String description
) {}