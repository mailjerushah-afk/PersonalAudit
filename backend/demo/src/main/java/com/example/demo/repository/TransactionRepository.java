List<Transaction> findByUserId(Long userId);
@GetMapping("/{userId}/balance")
public Double getBalance(@PathVariable Long userId) {
    return transactionRepository.findByUserId(userId)
            .stream()
            .mapToDouble(Transaction::getAmount)
            .sum();
}
