/*
 *  request.params not showing?
 */
const requestLogger = (request, response, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('\n========== REQUEST ==========')
    console.log(request.method, request.path, request.params)
    console.log(request.body)

    console.log('\n========== RESPONSE ==========')
    // console.log(response)

    console.log('\n========== ========== ==========\n')
  }

  next()
}

/*
 *
 */
const errorHandler = (error, request, response, next) => {
  console.log('\n========== ========== ==========')
  console.log(`ERROR: ${error.name}`)
  console.log(error.message)

  console.log('\n========== ========== ==========')
  response.status(500).send({
    error: error.name
  })

  next()
}

module.exports = { requestLogger, errorHandler }
