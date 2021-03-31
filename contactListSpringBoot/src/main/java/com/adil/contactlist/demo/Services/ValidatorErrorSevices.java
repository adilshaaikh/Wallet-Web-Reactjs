package com.adil.contactlist.demo.Services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class ValidatorErrorSevices {
    public ResponseEntity<?> validate(BindingResult bindResult){
        if (bindResult.hasErrors()){
            Map<String,String> errormap=new HashMap<String, String>();
            for(FieldError error:bindResult.getFieldErrors()){
                errormap.put(error.getField(),error.getDefaultMessage());

            }
            return new ResponseEntity<Map<String,String>>(errormap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}
