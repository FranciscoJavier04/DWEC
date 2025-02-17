package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the posiciones_asignadas database table.
 * 
 */
@Entity
@Table(name="posiciones_asignadas")
@NamedQuery(name="PosicionesAsignada.findAll", query="SELECT p FROM PosicionesAsignada p")
public class PosicionesAsignada implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;
	
	@ManyToOne
    @JoinColumn(name = "futbolista_id")
    private Futbolista futbolista;

    @ManyToOne
    @JoinColumn(name = "posicion_id")
    private Posicione posicion;

	public PosicionesAsignada() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Futbolista getFutbolista() {
		return futbolista;
	}

	public void setFutbolista(Futbolista futbolista) {
		this.futbolista = futbolista;
	}

	public Posicione getPosicion() {
		return posicion;
	}

	public void setPosicion(Posicione posicion) {
		this.posicion = posicion;
	}



}