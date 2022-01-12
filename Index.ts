import fs from "fs";

lerArquivos("./src");


async function lerArquivos(dir: string) { // Ler arquivos de um diretório e salvar em csv
    
   const lerArquivosDaPasta =  fs.readdirSync(dir);
    var arquivo="";
    for(let lerArquivos of lerArquivosDaPasta) {
        arquivo+=fs.readFileSync(`${dir}/${lerArquivos}`, "utf-8")
    }

 const teste = fs.writeFile("teste.xls", arquivo.toString(),function(err){
    if(!err){
        console.log("Arquivo salvo com sucesso!")
    }else{
    console.log(err)
    } 
  }); 
} 
