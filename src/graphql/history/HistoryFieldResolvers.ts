import { ChangeLogType, BaseChangeRecordType, SupportedCollectionTypes } from '../../db/ChangeLogType.js'

/**
 * Customize to resolve individual fields
 */
const resolvers = {
  History: {
    id: (node: ChangeLogType) => node._id.toString(),
    editedBy: (node: ChangeLogType) => node.editedBy.toUUID().toString()
  },

  Change: {
    changeId: (node: BaseChangeRecordType) => node._id._data,

    updateDescription: ({ updateDescription }: BaseChangeRecordType) =>
      updateDescription == null
        ? ({
            updatedFields: [],
            removedFields: [],
            truncatedArrays: []
          })
        : updateDescription
  },

  Document: {
    __resolveType (node: SupportedCollectionTypes) {
      if (node.kind === 'areas') {
        return 'Area'
      }
      if (node.kind === 'climbs') {
        return 'Climb'
      }
      return null
    }
  }
}

export default resolvers
