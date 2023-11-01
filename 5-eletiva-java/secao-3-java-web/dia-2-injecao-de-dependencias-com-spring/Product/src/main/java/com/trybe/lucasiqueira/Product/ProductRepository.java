package com.trybe.lucasiqueira.Product;

import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

  public String getMessage() {
    return "Mensagem: produto retornado";
  }
}
