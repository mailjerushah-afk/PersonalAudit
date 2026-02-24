package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrNegative;

import java.math.BigDecimal;

public record TransactionRequest(

        @NotNull
        Long userId,

        @NotNull
        @PositiveOrNegative
        BigDecimal amount,

        String description
) {}