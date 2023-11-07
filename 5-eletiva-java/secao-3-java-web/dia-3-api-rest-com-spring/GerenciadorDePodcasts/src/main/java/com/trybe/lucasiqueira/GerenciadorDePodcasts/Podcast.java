package com.trybe.lucasiqueira.GerenciadorDePodcasts;

public class Podcast {

  private Integer id;
  private String name;
  private String url;

  private String secretToken;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getSecretToken() {
    return secretToken;
  }

  public void setSecretToken(String secretToken) {
    this.secretToken = secretToken;
  }
}
