package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "kommuner")
public class Kommune {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    private String name;
    private int indbyggertal, coronaIncidens;

    public Kommune() {
    }

    public Kommune(Long id, String name, int indbyggertal, int coronaIncidens) {
        this.id = id;
        this.name = name;
        this.indbyggertal = indbyggertal;
        this.coronaIncidens = coronaIncidens;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIndbyggertal() {
        return indbyggertal;
    }

    public void setIndbyggertal(int indbyggertal) {
        this.indbyggertal = indbyggertal;
    }

    public int getCoronaIncidens() {
        return coronaIncidens;
    }

    public void setCoronaIncidens(int coronaIncidens) {
        this.coronaIncidens = coronaIncidens;
    }
}
