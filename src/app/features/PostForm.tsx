import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input/Input";
import Loading from "../components/Loading";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCounter from "../components/WordPriceCounter";

export default function PostForm() {

  const history = useHistory()

  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [publishing, setPublishing] = useState(false)

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault(); // Impede atualizacao da tela por padrao

    try {

      setPublishing(true) // Habilita a visualizacao do componente de overlasy indicativo de loading
  
      const newPost = {
        body,
        title,
        //tags: tags.map(tag => tag.text), // Nao funciona. Nao captura as tags digitadas no formulario
        tags: ['Javascript', 'C++', 'VBA'], // Inserindo manualmente, o poste é incluído com sucesso no backend
        imageUrl,
      }
  
      const insertedPost = await PostService // importante usar await (Async Await) 
        .insertNewPost(newPost)
    
      info({
        title: 'Post salvo com sucesso',
        description: 'Você acabou de criar o post com o id ' + insertedPost.id
      })

      history.push('/') // força ida para a rota inicialapos inserção do post

    } finally {

      setPublishing(false) // Desabilita a visualizacao do componente de overlasy indicativo de loading
  
    }



  }

  return <PostFormWrapper onSubmit={ handleFormSubmit }>

    <Loading show={publishing} /> 

    <Input 
      label="Título" 
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />

    <ImageUpload 
      //onImageUpload={(imageUrl) => setImageUrl(imageUrl)}
      onImageUpload={setImageUrl} // Simplificacao da linha anterior
      label="Thumbnail do post" 
    />

    <MarkdownEditor onChange={ setBody } />

    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />

    <PostFormSubmitWrapper>

      <WordPriceCounter 
        pricePerWord={0.10}
        wordsCount={countWordsInMarkdown(body)} 
      />
      <Button 
        variant="primary" 
        label="Salvar post" 
        type="submit" 
        //disabled={ !title || !imageUrl || !body || !tags.length } // Desabilita botao se estes estados não estiverem preenchidos
        disabled={ !title || !imageUrl || !body } // Desabilita botao se estes estados não estiverem preenchidos
      />

    </PostFormSubmitWrapper>

  </PostFormWrapper>

}

const PostFormWrapper=styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper=styled.div`
  display: flex;
  justify-content: space-between;
`
