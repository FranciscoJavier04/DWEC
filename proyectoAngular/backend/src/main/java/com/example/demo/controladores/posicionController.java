package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.Posicione;

import com.example.demo.repositorios.futbolistaRepositorio;
import com.example.demo.repositorios.posicionRepositorio;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/posicion")
public class posicionController {

    @Autowired
    futbolistaRepositorio futRep;

    @Autowired
    posicionRepositorio posRep;

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

    @DeleteMapping(path = "/borrar", consumes = MediaType.APPLICATION_JSON_VALUE)
    public DTO deletePosicion(@RequestBody DTO soloid, HttpServletRequest request) {
        DTO dtoRespuesta = new DTO();

        Posicione posicion = posRep.findById(Integer.parseInt(soloid.get("id").toString()));
        if (posicion != null) {
            posRep.delete(posicion);
            dtoRespuesta.put("borrado", "ok");
        } else {
            dtoRespuesta.put("borrado", "fail");
        }

        return dtoRespuesta;
    }
}
