import useApi from '../hooks/useApi'

export const useBlog = () => {
  const api = useApi()
  const AllListBlogAction = async () => {
    try {
      const response = await api.get('Blog/list', null, null)
      return response
    } catch (error) {
      console.log('Error AllListBlog', error.data.response)
      return error
    }
  }
  const listBlogByIdAction = async (id) => {
    try {
      const headers = { id }
      const response = await api.get('Blog/listBlogById', null, headers)
      return response
    } catch (error) {
      console.log('Error listBlogByIdAction', error.data.response)
      return error
    }
  }
  const CreatedBlogAction = async (body) => {
    try {
      const response = await api.post('Blog/createdBlog', body, null)
      return response
    } catch (error) {
      console.log('Error CreatedBlogAction', error.data.response)
      return error
    }
  }
  const UpdateBlogAction = async (body, id) => {
    try {
      const headers = { id }
      const response = await api.put('Blog/updateBlog', body, null, headers)
      return response
    } catch (error) {
      console.log('Error UpdateBlogAction', error.data.response)
      return error
    }
  }
  return {
    AllListBlogAction,
    listBlogByIdAction,
    CreatedBlogAction,
    UpdateBlogAction
  }
}
