package com.example.demo.config;

import com.example.demo.model.Kommune;
import com.example.demo.repository.KommuneRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Bootstrap implements CommandLineRunner {
private final KommuneRepository kommuneRepository;

public Bootstrap(KommuneRepository kommuneRepository){
    this.kommuneRepository = kommuneRepository;
}

    @Override
    public void run(String... args) throws Exception{
        Kommune kommune = new Kommune();
        kommune.setName("København");
        kommune.setIndbyggertal(638117);
        kommuneRepository.save(kommune);

        Kommune kommune1 = new Kommune();
        kommune1.setName("Aarhus");
        kommune1.setIndbyggertal(352751);
        kommuneRepository.save(kommune1);

        Kommune kommune2 = new Kommune();
        kommune2.setName("Aalborg");
        kommune2.setIndbyggertal(219487);
        kommuneRepository.save(kommune2);

        Kommune kommune3 = new Kommune();
        kommune3.setName("Odense");
        kommune3.setIndbyggertal(205509);
        kommuneRepository.save(kommune3);

        Kommune kommune4 = new Kommune();
        kommune4.setName("Vejle");
        kommune4.setIndbyggertal(116992);
        kommuneRepository.save(kommune4);

        Kommune kommune5 = new Kommune();
        kommune5.setName("Esbjerg");
        kommune5.setIndbyggertal(115579);
        kommuneRepository.save(kommune5);

        Kommune kommune6 = new Kommune();
        kommune6.setName("Frederiksberg");
        kommune6.setIndbyggertal(103677);
        kommuneRepository.save(kommune6);

        Kommune kommune7 = new Kommune();
        kommune7.setName("Randers");
        kommune7.setIndbyggertal(98190);
        kommuneRepository.save(kommune7);

        Kommune kommune8 = new Kommune();
        kommune8.setName("Viborg");
        kommune8.setIndbyggertal(96679);
        kommuneRepository.save(kommune8);

        Kommune kommune9 = new Kommune();
        kommune9.setName("Silkeborg");
        kommune9.setIndbyggertal(95488);
        kommuneRepository.save(kommune9);

        Kommune kommune10 = new Kommune();
        kommune10.setName("Kolding");
        kommune10.setIndbyggertal(93161);
        kommuneRepository.save(kommune10);
    }
}
