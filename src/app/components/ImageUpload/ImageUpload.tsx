import { mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent, useEffect, useState } from 'react';

//import FileService from '../../../sdk/services/File.service';
// Substituido sdk interno do projeto pelo modulo sdk criado e baixado do npm 
import { FileService } from 'danielbonifacio-sdk';

import Button from '../Button/Button';
import Loading from '../Loading'
import * as IU from './ImageUpload.styles'

export interface ImageUploadProps { 
  label: string
  onImageUpload: (imageUrl: string) => any
  preview?: string
}

function ImageUpload( props: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined)
  const [pushing, setPushing] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement> ) {

    const file = e.target.files![0]

    if (file) {

      //console.log(file)
      const reader = new FileReader()

      reader.addEventListener('load', async e => {

        try {
          setPushing(true)
          setFilePreview(String(e.target?.result));
          const imageUrl = await FileService.upload(file)
          //console.log(imageUrl)
          props.onImageUpload(imageUrl)
        } finally {
          setPushing(false)
        }

      })
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    setFilePreview(props.preview)
  }, [props.preview])

  if (filePreview) {
    //return <img src={filePreview} alt={'sdadass'} />

    return <IU.ImagePreviewWrapper>
      <Loading show={pushing} />
      <IU.ImagePreview preview={filePreview}>
        <Button 
          variant={'primary'}
          label={'Remover imagem'}
          onClick={() => setFilePreview(undefined)}
        />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>
  }

  return <IU.Wrapper>
    <Loading show={pushing} />
    <IU.Label>
      <Icon 
        size={'24px'}
        path={mdiUpload}
      />
      { props.label }
      <IU.Input 
        type="file"
        onChange={ handleChange }
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload