/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        episodes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
