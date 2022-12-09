package com.mute.Final.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "review_seat_avg")
public class ReviewSeatAvg {
    @Id
    private int seatId;
    private double avgAllSeat;
}