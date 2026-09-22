# Guardar as fotos atualizadas e a logo no GitHub

## Alterações
- Transferir para `src/assets` os ficheiros reais das nove fotografias atualmente usadas na galeria e da logo oficial, preservando os nomes, formatos e qualidade atuais.
- Substituir as dez referências externas `.asset.json` por importações diretas dos ficheiros de imagem guardados no projeto.
- Manter exatamente a ordem atual da galeria, os enquadramentos, o lightbox, os textos alternativos e as proporções da logo no cabeçalho e no rodapé.
- Remover apenas os dez ficheiros de referência externa que deixarem de ser necessários; não remover outras imagens existentes no repositório.

## Verificação
- Confirmar que as nove fotografias e a logo aparecem como ficheiros binários rastreados pelo Git e, portanto, serão sincronizados com o GitHub.
- Confirmar no preview que a galeria, o cabeçalho e o rodapé continuam visualmente iguais e que nenhuma imagem está em falta.
- Executar a verificação final do projeto e confirmar ausência de referências antigas aos ficheiros `.asset.json` substituídos.

## Limites
- Não alterar conteúdo, ordem das fotos, identidade visual ou restantes elementos do site.
- Não publicar o site.
