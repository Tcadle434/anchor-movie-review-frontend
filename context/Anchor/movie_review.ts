export type AnchorMovieReviewProgram = {
  version: '0.1.0';
  name: 'anchor_movie_review_program';
  instructions: [
    {
      name: 'addMovieReview';
      accounts: [
        {
          name: 'movieReview';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'arg';
                type: 'string';
                path: 'title';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'initializer';
              }
            ];
          };
        },
        {
          name: 'initializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'movieCommentCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'MovieAccountState';
                path: 'movie_review';
              }
            ];
          };
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'title';
          type: 'string';
        },
        {
          name: 'description';
          type: 'string';
        },
        {
          name: 'rating';
          type: 'u8';
        }
      ];
    },
    {
      name: 'addComment';
      accounts: [
        {
          name: 'movieComment';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'account';
                type: 'publicKey';
                account: 'MovieAccountState';
                path: 'movie_review';
              },
              {
                kind: 'account';
                type: 'u64';
                account: 'MovieCommentCounter';
                path: 'movie_comment_counter.counter';
              }
            ];
          };
        },
        {
          name: 'movieReview';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'movieCommentCounter';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'const';
                type: 'string';
                value: 'counter';
              },
              {
                kind: 'account';
                type: 'publicKey';
                account: 'MovieAccountState';
                path: 'movie_review';
              }
            ];
          };
        },
        {
          name: 'initializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'comment';
          type: 'string';
        }
      ];
    },
    {
      name: 'updateMovieReview';
      accounts: [
        {
          name: 'movieReview';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'arg';
                type: 'string';
                path: 'title';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'initializer';
              }
            ];
          };
        },
        {
          name: 'initializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'title';
          type: 'string';
        },
        {
          name: 'description';
          type: 'string';
        },
        {
          name: 'rating';
          type: 'u8';
        }
      ];
    },
    {
      name: 'deleteMovieReview';
      accounts: [
        {
          name: 'movieReview';
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: 'arg';
                type: 'string';
                path: 'title';
              },
              {
                kind: 'account';
                type: 'publicKey';
                path: 'initializer';
              }
            ];
          };
        },
        {
          name: 'initializer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'title';
          type: 'string';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'movieAccountState';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'reviewer';
            type: 'publicKey';
          },
          {
            name: 'rating';
            type: 'u8';
          },
          {
            name: 'title';
            type: 'string';
          },
          {
            name: 'description';
            type: 'string';
          }
        ];
      };
    },
    {
      name: 'movieCommentCounter';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'counter';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'movieComment';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'review';
            type: 'publicKey';
          },
          {
            name: 'commenter';
            type: 'publicKey';
          },
          {
            name: 'comment';
            type: 'string';
          },
          {
            name: 'count';
            type: 'u64';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidRating';
      msg: 'Rating must be between 1 and 5';
    }
  ];
};

export const IDL: AnchorMovieReviewProgram = {
  version: '0.1.0',
  name: 'anchor_movie_review_program',
  instructions: [
    {
      name: 'addMovieReview',
      accounts: [
        {
          name: 'movieReview',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'arg',
                type: 'string',
                path: 'title',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'initializer',
              },
            ],
          },
        },
        {
          name: 'initializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'movieCommentCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'MovieAccountState',
                path: 'movie_review',
              },
            ],
          },
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'rating',
          type: 'u8',
        },
      ],
    },
    {
      name: 'addComment',
      accounts: [
        {
          name: 'movieComment',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'account',
                type: 'publicKey',
                account: 'MovieAccountState',
                path: 'movie_review',
              },
              {
                kind: 'account',
                type: 'u64',
                account: 'MovieCommentCounter',
                path: 'movie_comment_counter.counter',
              },
            ],
          },
        },
        {
          name: 'movieReview',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'movieCommentCounter',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'const',
                type: 'string',
                value: 'counter',
              },
              {
                kind: 'account',
                type: 'publicKey',
                account: 'MovieAccountState',
                path: 'movie_review',
              },
            ],
          },
        },
        {
          name: 'initializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'comment',
          type: 'string',
        },
      ],
    },
    {
      name: 'updateMovieReview',
      accounts: [
        {
          name: 'movieReview',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'arg',
                type: 'string',
                path: 'title',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'initializer',
              },
            ],
          },
        },
        {
          name: 'initializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'rating',
          type: 'u8',
        },
      ],
    },
    {
      name: 'deleteMovieReview',
      accounts: [
        {
          name: 'movieReview',
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: 'arg',
                type: 'string',
                path: 'title',
              },
              {
                kind: 'account',
                type: 'publicKey',
                path: 'initializer',
              },
            ],
          },
        },
        {
          name: 'initializer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'movieAccountState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'reviewer',
            type: 'publicKey',
          },
          {
            name: 'rating',
            type: 'u8',
          },
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'movieCommentCounter',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'counter',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'movieComment',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'review',
            type: 'publicKey',
          },
          {
            name: 'commenter',
            type: 'publicKey',
          },
          {
            name: 'comment',
            type: 'string',
          },
          {
            name: 'count',
            type: 'u64',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidRating',
      msg: 'Rating must be between 1 and 5',
    },
  ],
};
