package com.example.demo.model;

import jakarta.persistence.*;
import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transactions",
       indexes = @Index(name = "idx_user_id", columnList = "user_id"))
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;

    private String description;

    @Column(nullable = false)
    private String category;

    private LocalDateTime timestamp;

    @ManyToOne(optional = true)
    @JoinColumn(name = "user_id")
    private User user;

    // getters & setters
    public Long getId() { return id; }
    public BigDecimal getAmount() { return amount; }
    public String getDescription() { return description; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public User getUser() { return user; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public void setAmount(BigDecimal amount) { this.amount = amount; }
    public void setDescription(String description) { this.description = description; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    public void setUser(User user) { this.user = user; }
}