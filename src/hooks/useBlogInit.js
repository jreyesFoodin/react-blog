import { useState, useEffect } from 'react'
import { useBlog } from '../action/blog'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Swal from 'sweetalert2'

export const useBlogInit = () => {
  const { AllListBlogAction, CreatedBlogAction, UpdateBlogAction, RemoverBlogAction } = useBlog()
  const [data, setData] = useLocalStorage('data', [])
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('add')
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [showView, setShowView] = useState(false)
  const [infoView, setInfoView] = useState({})
  const [isNetwork, setIsNetwork] = useState(false)
  useEffect(() => {
    initBlog()
  }, [])
  const initBlog = async () => {
    setLoading(true)
    setIsNetwork(false)
    const response = await AllListBlogAction()
    if (response.success) {
      setData(response.payload)
    } else {
      setIsNetwork(true)
    }
    setLoading(false)
  }
  const handleClickButton = (value) => {
    setStatus(value)
    setShow(true)
  }
  const handleActionForm = async (status, body, id) => {
    let response = ''
    if (status === 'add') {
      response = await CreatedBlogAction(body)
    } else if (status === 'edit') {
      response = await UpdateBlogAction(body, id)
    } else if (status === 'remove') {
      response = await RemoverBlogAction(id)
    }
    if (response.success) {
      Swal.fire({
        title: 'Felicidades',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          setStatus('add')
          setShow(false)
          initBlog()
        }
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: response.data.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }
  const handleClose = () => {
    setShow(false)
    setStatus('add')
  }
  const handleEditForm = (value) => {
    setInfo(value)
    setStatus('edit')
    setShow(true)
  }
  const handledButtonRemove = (value) => {
    const messageStatus = `¿Desea eliminar el libro ${value.title} ?`
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: messageStatus,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero!',
      cancelButtonText: 'No, quiero!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        handleActionForm('remove', null, value.idBlog)
      }
    })
  }
  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
  }
  const filteredData = data.filter((blog) => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      blog.title.toLowerCase().includes(searchTermLower) ||
      blog.author.toLowerCase().includes(searchTermLower) ||
      blog.content.toLowerCase().includes(searchTermLower)
    )
  })
  const handleCloseView = () => {
    setShowView(false)
    setInfoView({})
  }
  const openModalView = (obj) => {
    setShowView(true)
    setInfoView(obj)
  }
  return {
    filteredData,
    status,
    loading,
    info,
    show,
    searchTerm,
    showView,
    infoView,
    isNetwork,
    handleClickButton,
    handleActionForm,
    handleClose,
    handleEditForm,
    handledButtonRemove,
    handleSearch,
    handleCloseView,
    openModalView
  }
}
