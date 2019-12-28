
import { NewAssocation} from '../generated/Pacta/Pacta'
import { Organisation} from '../generated/schema'

export function handleNewAssocation(event: NewAssocation): void {
  let organisation = new Organisation(event.params.id.toHex())
  organisation.name = event.params.name
  organisation.address = event.params.association
  organisation.save()
}