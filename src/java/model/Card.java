package model;


import java.math.BigDecimal;
import java.text.MessageFormat;
import javax.json.Json;
import javax.json.JsonObject;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author pxmlw126com
 */
public class Card {
    private int shape ;
    private int color ;
    private int sq;
    private int number;
    private int id;
    public Card(int id,int shape,int color,int sq,int number)
    {
        this.shape=shape;
        this.color=color;
        this.sq=sq;
        this.number=number;
        this.id=id;
        
    }
    public String toString()
    {
        String a,b,c,d;
        a=String.valueOf(shape);
        b=String.valueOf(color);
        c=String.valueOf(sq);
        d=String.valueOf(number);
     return a+b+c+d;
    }

    /**
     * @return the shape
     */
    public int getShape() {
        return shape;
    }

    /**
     * @param shape the shape to set
     */
    public void setShape(int shape) {
        this.shape = shape;
    }

    /**
     * @return the color
     */
    public int getColor() {
        return color;
    }

    /**
     * @param color the color to set
     */
    public void setColor(int color) {
        this.color = color;
    }

    /**
     * @return the sq
     */
    public int getSq() {
        return sq;
    }

    /**
     * @param sq the sq to set
     */
    public void setSq(int sq) {
        this.sq = sq;
    }

    /**
     * @return the number
     */
    public int getNumber() {
        return number;
    }

    /**
     * @param number the number to set
     */
    public void setNumber(int number) {
        this.number = number;
    }
    public JsonObject toJson() {
        return (Json.createObjectBuilder()
                .add("id", id)
                .add("number", number)
                .add("color", color)
                .add("shape", shape)
                .add("sq", sq)
                .build());
    }
}
