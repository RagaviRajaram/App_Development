package com.eventplanning.evento.model;

import lombok.Data;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String eventName;
    private String organizerName;
    private LocalDate date;
    private LocalTime time;
    private String venue;
    private String additionalInfo;
}
