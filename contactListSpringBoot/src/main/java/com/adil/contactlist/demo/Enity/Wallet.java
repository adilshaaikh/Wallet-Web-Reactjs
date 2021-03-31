package com.adil.contactlist.demo.Enity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name can't be blank")
    @Size(min = 2,max = 30)
    private String name;
    @Size(min = 6,max = 30)
    private String accountNumber;
    @Size(max = 100)
    private String description;
    @Min(1)
    @Max(3)
    private Integer priority; //1=High; 2=Medium; 3=Low
    private Double currentBalance;
    @OneToMany(cascade = CascadeType.REFRESH,fetch = FetchType.EAGER,mappedBy = "wallet",orphanRemoval = true)
    @JsonIgnore
    private List<Transaction> transactions;
    @PrePersist
    public void setBalance(){ this.currentBalance = new Double(0); }
}