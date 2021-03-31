package com.adil.contactlist.demo.Controller;


import com.adil.contactlist.demo.Enity.Wallet;
import com.adil.contactlist.demo.Services.ValidatorErrorSevices;
import com.adil.contactlist.demo.Services.WalletServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/wallet")
@CrossOrigin
public class WalletController {
    @Autowired
    private WalletServices walletServices;
    @Autowired
    private ValidatorErrorSevices validatorErrorSevices;

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(walletServices.getAll(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return new ResponseEntity<>(walletServices.getById(id),HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Wallet wallet, BindingResult bindResult){
        ResponseEntity errors=validatorErrorSevices.validate(bindResult);
        if(errors!=null) return errors;
        Wallet wallet1= walletServices.createOrUpdate(wallet);
        return new ResponseEntity<Wallet>(wallet1,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@Valid @RequestBody Wallet wallet, BindingResult bindResult){
        ResponseEntity errors=validatorErrorSevices.validate(bindResult);
        if(errors!=null) return errors;
        wallet.setId(id);
        Wallet wallet1= walletServices.createOrUpdate(wallet);
        return new ResponseEntity<Wallet>(wallet1,HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        walletServices.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
