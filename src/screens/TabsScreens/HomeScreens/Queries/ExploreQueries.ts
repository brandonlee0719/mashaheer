import { gql } from '@apollo/client';

export const HEALTHCAT = gql`
  query {
    categories(filters: {id: {eq: 1}}) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const SPORTSHCAT = gql`
  query {
    category(id: 2) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const COSCAT = gql`
  query {
    category(id: 3) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const FASHCAT = gql`
  query {
    category(id: 4) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const HOSHCAT = gql`
  query {
    category(id: 5) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const FOODCAT = gql`
  query {
    category(id: 6) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const AUTOCAT = gql`
  query {
    category(id: 7) {
      data {
        id
        attributes {
          catName
          users {
            data {
              attributes {
                name
                infIsNMC
                profilePhoto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
