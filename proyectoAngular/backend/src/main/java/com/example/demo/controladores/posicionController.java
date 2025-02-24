package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.Posicione;

import com.example.demo.repositorios.futbolistaRepositorio;
import com.example.demo.repositorios.posicionRepositorio;

@CrossOrigin(origins = "http:localhost:4200")
@RestController
@RequestMapping("/posicion")
public class posicionController {

    @Autowired
    futbolistaRepositorio futRep;

    @Autowired
    posicionRepositorio posRep;

    @CrossOrigin(origins = "http:localhost:4200")
    @GetMapping("/obt")
    public List<DTO> getPosiciones() {
        List<DTO> listaPosDTO = new ArrayList<DTO>();
        List<Posicione> listaPos = posRep.findAll();

        for (Posicione h : listaPos) {
            DTO dtoPos = new DTO();
            dtoPos.put("id", h.getId());
            dtoPos.put("Nombre", h.getNombre());

            listaPosDTO.add(dtoPos);
        }

        return listaPosDTO;
    }
}
