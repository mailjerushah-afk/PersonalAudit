package com.example.demo.model;
import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
public class PortfolioItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String asset;
    private int quantity;
    private double value;
}