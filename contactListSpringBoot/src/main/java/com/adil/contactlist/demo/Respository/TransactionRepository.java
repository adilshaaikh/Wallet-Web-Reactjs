package com.adil.contactlist.demo.Respository;

import com.adil.contactlist.demo.Enity.Transaction;
import com.adil.contactlist.demo.Enity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {
    List<Transaction> findByWallet(Wallet wallet);

}
