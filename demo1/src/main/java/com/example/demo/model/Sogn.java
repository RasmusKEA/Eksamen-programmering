package com.example.demo.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Sogne")
public class Sogn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int sognekode, smittetryk;
    private String sognNavn, kommune, nedlukning;

    public Sogn() {
    }

    public Sogn(Long id, int sognekode, String kommune, int smittetryk, String nedlukning, String sognNavn) {
        this.sognNavn = sognNavn;
        this.id = id;
        this.sognekode = sognekode;
        this.kommune = kommune;
        this.smittetryk = smittetryk;
        this.nedlukning = nedlukning;
    }

    public String getSognNavn() {
        return sognNavn;
    }

    public void setSognNavn(String sognNavn) {
        this.sognNavn = sognNavn;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getSognekode() {
        return sognekode;
    }

    public void setSognekode(int sognekode) {
        this.sognekode = sognekode;
    }

    public String getKommune() {
        return kommune;
    }

    public void setKommune(String kommune) {
        this.kommune = kommune;
    }

    public int getSmittetryk() {
        return smittetryk;
    }

    public void setSmittetryk(int smittetryk) {
        this.smittetryk = smittetryk;
    }

    public String getNedlukning() {
        return nedlukning;
    }

    public void setNedlukning(String nedlukning) {
        this.nedlukning = nedlukning;
    }
}
