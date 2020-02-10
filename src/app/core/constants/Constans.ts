export class Constants {
  public static API_ENDPOINT = '/api/';
  static User = class {
    public static PREFIX = 'users';
    public static ME = 'me';
    public static RATING = 'rating';
  };
  static Role = class {
    public static PREFIX = 'roles';
  };
  static Challenge = class {
    public static PREFIX = 'challenges';
    public static APPLICATIONS = 'applications';
    public static WAITING = 'waiting';
    public static ACCEPT = 'accept';
    public static REJECT = 'reject';
    public static ACCEPTED_APL = 1;
    public static WAITING_APL = 0;
    public static REJECTED_APL = 2;
    public static GROUP_POLL = 'groupPoll';
    public static GROUP_POLL_RESULT = 'groupPollResult';
  };
  static Authentication = class {
    public static LOGIN = 'token';
    public static TOKEN = 'token';
    public static ID = 'id';
    public static ROLE = 'role';
    public static THEME = 'theme';
    public static ADMIN = 'isAdmin';
  };
  static Article = class {
    public static PREFIX = 'articles';
    public static PROJECTS = 'projects';
  };
  static Group = class {
    public static PREFIX = 'groups';
  };
  static Sphere = class  {
    public static PREFIX = 'spheres';
  };
}
