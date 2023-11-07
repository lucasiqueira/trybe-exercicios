package com.trybe.lucasiqueira.GerenciadorDePodcasts;

import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class PodcastService {

  public Podcast findPodcastById(Integer id) {
    Podcast podcast = new Podcast();
    podcast.setId(id);
    podcast.setName("Meu podcast");
    podcast.setUrl("http://www.meupodcast.com.br");
    podcast.setSecretToken("super-secret-token-123");

    return podcast;
  }

  public Podcast createPodcast(PodcastCreationDto newPodcastDto) {
    Podcast podcast = new Podcast();
    // Vamos fingir que estamos salvando o podcast
    // ao atribuir um ID aleatório a ele
    podcast.setId(new Random().nextInt(0, 1000));

    podcast.setName(newPodcastDto.name());
    podcast.setUrl(newPodcastDto.url());

    podcast.setSecretToken("super-secret-token-123");

    return podcast;
  }
}
