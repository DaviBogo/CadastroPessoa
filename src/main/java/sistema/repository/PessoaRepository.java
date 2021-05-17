package sistema.repository;

import org.springframework.data.repository.CrudRepository;
import sistema.model.Pessoa;

public interface PessoaRepository extends CrudRepository<Pessoa, Long> {
}
