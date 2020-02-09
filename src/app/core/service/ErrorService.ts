export class ErrorService {
  getErrorsList(): object {
    return {
      UserAlreadyExistsError: {
        bg: 'Вече съществува потребител с този имейл адрес.'
      },
      PasswordsMismatchError: {
        bg: 'Паролите не съвпадат.',
      },
      UnauthorizedException: {
        bg: 'Грешно потребителско име или парола.'
      },
      AlreadyAcceptedChallengeError: {
        bg: 'Предизвикателството е вече прието.',
      },
      ChallengeOutOfTimeframeError: {
        bg: 'Предизвикателството е с изтекъл срок.',
      },
      GroupAlreadyHasPoll: {
        bg: 'Вече е създадено допитване.',
      },
      GroupNeedsPollOrQuorumError: {
        bg: 'Нужно е да се създаде допитване.',
      },
      TooManyRejectedApplicationsError: {
        bg: 'Твърде много отказани кандидатури.',
      },
      TooManyWaitingApplicationsError: {
        bg: 'Твърде много изпратени кандидатури.'
      },
      ServerError: {
        bg: 'Грешка в сървъра.'
      }
    };
  }
}
