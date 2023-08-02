import React from 'react'
import FileInput from './Admin components/FileInput'
import TextArea from './Admin components/TextArea'
import CategorySelect from './Admin components/CategorySelect'
import TextInput from './Admin components/TextInput'
import SubmitButton from './Admin components/SubmitButton'

function VideoForm() {
  return (
    <form action="" method="post" className="flex flex-col gap-8">
          <FileInput />
          <TextArea />
          <CategorySelect />
          <TextInput placeholder="Enter author name..." name="author" title="Author Name" type="text"/>
          <SubmitButton/>
        </form>
  )
}

export default VideoForm