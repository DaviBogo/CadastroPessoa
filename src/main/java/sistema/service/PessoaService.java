package sistema.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sistema.model.Pessoa;
import sistema.repository.PessoaRepository;

import java.io.IOException;

@Service
public class PessoaService {

    @Autowired
    PessoaRepository pessoaRepository;

    public void cadastraPessoa(Pessoa pessoa, MultipartFile foto) throws IOException {
        pessoa.setFoto(foto.getBytes());
        pessoaRepository.save(pessoa);
    }
}
