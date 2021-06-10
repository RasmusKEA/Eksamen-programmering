package com.example.demo.controller;

import com.example.demo.model.Kommune;
import com.example.demo.model.Sogn;
import com.example.demo.repository.KommuneRepository;
import com.example.demo.repository.SognRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    private final SognRepository sognRepository;
    private final KommuneRepository kommuneRepository;


    public RestController(SognRepository sognRepository, KommuneRepository kommuneRepository){
        this.kommuneRepository = kommuneRepository;
        this.sognRepository = sognRepository;
    }

    @PostMapping(value = "/createSogn", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Sogn createSogn(@RequestBody Sogn sogn){
        Kommune kommune = kommuneRepository.findByName(sogn.getKommune());

        if(kommune != null){
            int oldSmitte = kommune.getCoronaIncidens();
            int newSmitte = oldSmitte+sogn.getSmittetryk();
            kommune.setCoronaIncidens(newSmitte);
            kommuneRepository.save(kommune);
        }

        return sognRepository.save(sogn);
    }

    @PostMapping(value = "/updateSogn", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Sogn updateSogn(@RequestBody Sogn sogn){

        return sognRepository.save(sogn);
    }

    @RequestMapping(value = "/deleteSogn/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteSogn(@PathVariable Long id){

        Optional<Sogn> sognOpt = sognRepository.findById(id);
        if(sognOpt.isPresent()){
            Sogn sogn = sognOpt.get();
            Kommune kommune = kommuneRepository.findByName(sogn.getKommune());
            int oldSmitte = kommune.getCoronaIncidens();
            int newSmitte = oldSmitte-sogn.getSmittetryk();
            kommune.setCoronaIncidens(newSmitte);
            kommuneRepository.save(kommune);
        }

        sognRepository.deleteById(id);
        return "Sogn er nu slettet";
    }

    @GetMapping("/getAllSogn")
    public List<Sogn> getAllSogn(){
        List<Sogn> sogne = sognRepository.findAll();
        return sogne;
    }

    @GetMapping("/getAllKommuner")
    public List<Kommune> getAllKommune(){
        List<Kommune> kommuner = kommuneRepository.findAll();
        return kommuner;
    }
}
