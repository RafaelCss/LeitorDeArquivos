import fs from "fs";

/* lerArquivos("./src");


function lerArquivos(dir: string) { // Ler arquivos de um diretório e salvar em csv
    
  const lerArquivosDaPasta = fs.readdirSync(dir);

  for (let i in lerArquivosDaPasta) {
    const arquivosLidos = fs.readFileSync(`${dir}/${lerArquivosDaPasta[i]}`, "utf-8");
    const teste = fs.writeFile("teste.xls", arquivosLidos,function(err){
        if(!err){
            console.log("Arquivo salvo com sucesso!")
        }else{
        console.log(err)
        } 
    });
  }
} */



lerArquivosXls("./src");

async function lerArquivosXls(dir: string) { //ler o Csv e salvar em xml 

  const arquivosLidos = fs.readFileSync(`${dir}/${"teste.xls"}`, "utf-8");
  const texto = Array.from(arquivosLidos.split(" "));
  

 const array = [];
  for (let i in texto) {
    array.push(texto[i]);
  }

   Array.from(array).forEach(element => {
    console.log(element);
    });



// função para  salvar cada palabvra em um arquivo xml






  const teste = fs.writeFile("teste.xls", arquivosLidos, function (err) {
    if (!err) {
      console.log("Arquivo salvo com sucesso!");
    } else {
      console.log(err);
    }
  });



}
