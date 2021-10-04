import { useLocation } from 'react-router-dom'

/*
 *
 */
const NamePage = () => {
  const data = useLocation()
  const nameData = data.nameProps
  const {
    name_id,
    current_name,
    birth_name,
    biography,
    birth_details,
    death_details
  } = nameData

  /*
   *
   */
  return (
    <div>
      <section class='section is-large has-background-black-bis'>
        <div class='columns is-centered is-full'>
          <p class='title is-1 has-text-light'> {current_name} </p>
        </div>

        <div class='columns is-centered is-full'>
          <p class='subtitle is-3 has-text-grey-light'> Born as {birth_name} </p>
        </div>
      </section>

      <section class='section has-background-black-bis'>
        <div class='container py-3'>
          <div class='box has-background-black-ter'>
            <p class='subtitle is-5 has-text-grey-light'> Birth details:
              <p class='subtitle is-5 has-text-white'> {birth_details} </p>
            </p>
            <p class='subtitle is-5 has-text-grey-light'> Death details:
              <p class='subtitle is-5 has-text-white'> {death_details} </p>
            </p>
            <p class='subtitle is-5 has-text-grey-light'> Biography:
              <p class='subtitle is-5 has-text-white'> {biography} </p>
            </p>
          </div>
        </div>
      </section>

      <section class='section is-small has-background-black-bis'>
        <div class='columns is-centered is-full'>
          <p class='subtitle is-3 has-text-grey-light'> Movies  </p>
        </div>
      </section>

      <section class='section has-background-black-bis'>
        <div class='container py-3'>
          <div class='box has-background-black-ter' />
        </div>
      </section>
    </div>
  )
}

export default NamePage
