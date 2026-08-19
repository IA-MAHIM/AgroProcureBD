{user ? (
  <>
    {/* Dashboard Button */}
    <Link
      className="ghost-btn header-auth hide-mobile"
      to={roleDashboardPath(user.role)}
    >
      <LayoutDashboard size={17} />
      {text.dashboard || 'Dashboard'}
    </Link>

    {/* Logout Button */}
    <button
      type="button"
      className="ghost-btn header-auth hide-mobile"
      onClick={logout}
    >
      <LogOut size={17} />
      {text.logout || 'Logout'}
    </button>
  </>
) : (
