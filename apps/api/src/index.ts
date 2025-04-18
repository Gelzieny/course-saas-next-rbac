import { defineAbilityFor } from  '@saas-grm/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElese = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElese)
console.log(userCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)