package sistema.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import sistema.model.Pessoa;
import sistema.service.PessoaService;

import java.io.IOException;

@RestController
@RequestMapping("/api")
public class PessoaController {

    @Autowired
    PessoaService pessoaService;

    @Autowired
    ObjectMapper objectMapper;

    @PostMapping(value = "/pessoa", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> cadastraPessoa(
            @RequestParam(value = "pessoa", required = false) String pessoaJson,
            @RequestParam(value = "foto", required = false) MultipartFile foto) throws IOException {

        Pessoa pessoa = objectMapper.readValue(pessoaJson, Pessoa.class);
        pessoaService.cadastraPessoa(pessoa, foto);
        return new ResponseEntity<>("Cadastro realizado com sucesso!", HttpStatus.OK);
    }
}
